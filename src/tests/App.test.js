import axios from "axios";

describe("Testing gets to api", () => {
    const fetchDentists = () => axios.get(`https://jsonplaceholder.typicode.com/users`)
    const fetchOneDentist = (id) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    test('get dentists', () => {
        return fetchDentists().then(data => {
            expect(data.data.length).not.toBe(0);
        })
    })
    test('get one dentists', () => {
        return fetchOneDentist(5).then(data => {
            expect(data.data.length).not.toBe(0);
        })
    })
});
