const query = function () {
      let fromData = [];
      const havingFns = [];
      const whereFns = [];
      const whereFns2 = [];
      const doubleCall = {
        select: false,
        from: false,
        orderBy: false,
        groupBy: false,
      };

      const getGroup = (data, groupsFunc) => {
        if (!groupsFunc.length) {
          return data;
        }
        const groupFn = groupsFunc.shift();
        const keys = {};
        const oData = data.reduce((subgroup, el) => {
          const key = groupFn(el);
          keys[key] = typeof key;
          // console.log(' keys[key]',  keys[key])
          subgroup[key] = subgroup[key] || [];
          subgroup[key].push(el);
          return subgroup;
        }, {});
        let arrGroup =  Object.entries(oData)
        let mainGroup = arrGroup.map(([key, group]) => {
          if (keys[key] === "number") key = Number(key);
          
          return [key, getGroup(group, groupsFunc.slice())];
        });
        return mainGroup;
      };

      return {
        select(fn) {
          if (doubleCall.select) throw new Error("Duplicate SELECT");
          doubleCall.select = true;
          this.fnSelect = fn;
          return this;
        },
        from(data, join) {
          if (doubleCall.from) throw new Error("Duplicate FROM");
          doubleCall.from = true;
//           console.log('data', data)
          if(!join) {
            fromData = data.slice();
          } else {
            console.log('data', data)
            console.log('join', join)
            let joinData = []
            data.forEach((el) => {
              join.forEach((elInner) => {
                joinData.push([el, elInner])
              })
            })
            fromData = joinData;
          }
          return this;
        },
        where(...fns) {
          console.log('wherefns', fns)
          if (!whereFns.length) {
            whereFns.push(...fns)
          } else {
            whereFns2.push(...fns)
          }
          
          console.log('wherefns2', whereFns)
          return this;
        },
        orderBy(orderFn) {
          if (doubleCall.orderBy) throw new Error("Duplicate ORDERBY");
          doubleCall.orderBy = true;
          this.orderFn = orderFn
          return this;
        },
        groupBy(...groups) {
          if (doubleCall.groupBy) throw new Error("Duplicate GROUPBY");
          doubleCall.groupBy = true;
          this.groups = groups;
          return this;
        },
        having(fn) {
          havingFns.unshift(fn);
          return this;
        },
        execute() {
          if (whereFns.length > 0) {
            // where
//             const whereFns = this.whereFns;
            let data = []
//             console.log(fromData)
            whereFns.forEach((wFn) => {
              console.log('wFn',)
              let push = fromData.filter((el) => {
                if (wFn(el)) return el;
              });
              data = [...data, ...push]
            })
            fromData = data;
          }
          
          if (whereFns2.length > 0) {
            // where
//             const whereFns = this.whereFns;
            let data = []
//             console.log(fromData)
            whereFns2.forEach((wFn) => {
              console.log('wFn',)
              let push = fromData.filter((el) => {
                if (wFn(el)) return el;
              });
              data = [...data, ...push]
            })
            fromData = data;
          }

          if (this.groups !== undefined) {
            // groypBy
            fromData = getGroup(fromData, this.groups);
          }

         if (havingFns.length > 0) {
            // having
            havingFns.forEach((havingFilter) => {
              // console.log(fromData, havingFilter)     
              let filter = fromData.filter((el) => {
                if (havingFilter(el)) return el;
              });
              fromData = filter;
            })
          }
          if (this.fnSelect !== undefined) {
            // select
            let data = [];
            fromData.forEach((el) => {
              let selected = this.fnSelect(el);
              data.push(selected);
            });
            fromData = data;
          }
          
          if(this.orderFn !== undefined) {
            // orderBy
//             const copy = fromData.slice()
            fromData.sort(this.orderFn)
//             fromData = copy
          }
          return fromData;
        },
      };
    };