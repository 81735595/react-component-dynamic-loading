import {
    observable,
    extendObservable
} from 'mobx';

const header = {
    method: 'get',
    headers: new Headers({
        'Content-Type': 'application/json'
    })
}

class DataStore {
	@observable curPage = ''
    @observable pageA = [];
    @observable pageB = [];
    getDataA() {
        fetch('/getDataA', header)
        .then(response => response.text())
        .then(text => this.pageA = JSON.parse(text))
        .catch(e=>console.log(e))
    }
    getDataB() {
        fetch('/getDataB', header)
        .then(response => response.text())
        .then(text => this.pageB = JSON.parse(text))
        .catch(e=>console.log(e))
    }
}

let dataStore = new DataStore()

export default dataStore