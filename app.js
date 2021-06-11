// const App= {
//     data(){
//         return {
//             counter:0,
//             title:'Counter'
//         }
//     }
// }
// Vue.createApp(App).mount('#app')
const App= {
    data(){
        return {
            placeholderString:'add note',
            title:'Notes list',
            inputValue: '',
            notes:['Note 1','Note 2','Note 3']
        }
    },
        methods: {
            inputChangeHandler(event) {
                console.log('inputChangeHandler',event.target.value)
                this.inputValue =event.target.value
            },
            addNewNote() {
                this.notes.push(this.inputValue)
                this.inputValue=''
            },
            // inputKeyPress(event){
            //     if (event.key==='Enter') {
            //         this.addNewNote()
            //     }
            // }
            removeNote(idx){
                this.notes.splice(idx,1)
            }
        }
        
    
}
Vue.createApp(App).mount('#app')


