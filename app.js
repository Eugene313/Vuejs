    let app = new Vue({
        el: '#app',
        data : {
            array: [
                {name:'Vadim',desk:'RU',country : 'Ukraine',target : 20,totalDay:5,totalMounth:1,totalSum:250,team : 'team1'},
                {name:'Eugene',desk:'RU',country : 'Ukraine',target : 20,totalDay:3,totalMounth:0,totalSum:1000,team : 'team2'},
                {name:'Oleg',desk:'RU',country : 'Ukraine',target : 20,totalDay:1,totalMounth:0,totalSum:2250,team : 'team1'},
                {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:1,totalMounth:0,totalSum:5000,team : 'team2'}
            ],
            menu : false,
            name : 'User Name',
            desk : 'Desk',
            country : 'Select Country',
            target : 20,
            totalDay : 1,
            totalMounth : 0,
            totalSum : 250,
            team : 'team3'
        },
        methods : {
            totalSumF : function(name){
                let newTotal = this.array.filter(function(item){
                    return item.team === name;
                });
                let sum = newTotal.reduce(function(total,item){
                    return total+=item.totalDay
                },0)
                return sum
            },
            menuBar : function(){
                return this.menu = !this.menu
            },
            addUser : function(){

                // const userName = document.getElementById('name');
                // const userCountry = document.getElementById('country')
                const userPlan = document.getElementById('plan')
                const userDesk = document.getElementById('desk')
                const userTeam = document.getElementById('team')

                this.array.push({
                    name : this.name,
                    desk : userDesk.value,
                    country : this.country,
                    target : userPlan.value,
                    totalDay : this.totalDay,
                    totalMounth : this.totalMounth,
                    totalSum : this.totalSum,
                    team : userTeam.value
                });
            },
            totalDayF : function(){
                let array = this.array.reduce(function(total,item){
                    return total+=item.totalDay
                },0)
                return array
            },
            totalMounthF : function(){
                let totalArray = this.array.reduce(function(total,item){
                    return total+=item.totalMounth
                },0)
                return totalArray
            },
            totalSumFun : function(){
                let totalSumArray = this.array.reduce(function(total,item){
                    return total+=item.totalSum
                },0)
                return totalSumArray;
            }
        }
    })