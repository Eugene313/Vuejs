    let app = new Vue({
        el: '#app',
        data : {
            array: [
                {desk:'RU',country : 'Ukraine',target : 20,totalDay:5,totalMounth:1,totalSum:250,team : 'team1'},
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
            team : 'team3',
            time: 1
        },
        methods : {
            totalSumF(name){
                let newTotal = this.array.filter(function(item){
                    return item.team === name;
                });
                let sum = newTotal.reduce(function(total,item){
                    return total+=item.totalDay
                },0)
                return sum
            },
            menuBar(){
                return this.menu = !this.menu
            },
            addUser(){

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
            totalDayF(){
                let array = this.array.reduce(function(total,item){
                    return total+=item.totalDay
                },0)
                return array
            },
            totalMounthF(){
                let totalArray = this.array.reduce(function(total,item){
                    return total+=item.totalMounth
                },0)
                return totalArray
            },
            totalSumFun(){
                let totalSumArray = this.array.reduce(function(total,item){
                    return total+=item.totalSum
                },0)
                return totalSumArray;
            },
            funTime() {
                var that = this;
                setInterval(function(){
                    console.log("timeinterval");
                    that.time++;
                    console.log(that.time);
                },1000);
            }
        },
        beforeMount() {
            this.funTime();
        }
    })