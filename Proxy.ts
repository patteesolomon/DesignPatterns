class RemoteProxy {
    constructor() {
        console.log("RemoteProxy created");
    }
    request() {
        console.log("RemoteProxy request");
    }
    localStorage(storage = []) {
        console.log("RemoteProxy localStorage");
        return storage;
    }
    whetherMarshal(data = []) {
        let l = localStorage.getItem('data.json');
        if (l == null || l == undefined) {
            return false;
        }
        else {
                let marshalBin = [];
            marshalBin = JSON.parse(l?.trimEnd() || '[]');
            for (let i = 0; i < data.length; i++) {
                marshalBin.push(data[i]);
            }
                this.send(marshalBin, 1);
            return true;
        }
    }


    send(data, where) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${where}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }
}

class VirtualProxy {
    constructor() {
        console.log("VirtualProxy created");
    }
    request() {
        console.log("VirtualProxy request");
    }
    // 5
    send(data, where) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${where}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }
    dummyData() {
        let data = [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "body": "lorem ipsum dolor sit amet"
            },
            {
                "userId": 2,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "body": "lorem ipsum dolor sit amet"
            }
        ];
        return data;
    }

    //2

    async processVdata (req) {
        const l = await fetch(`https://jsonplaceholder.typicode.com/posts/req`);
        const responce = await l.json();
        let neverMind = responce.body;
        return neverMind;
    }
    // 3
    async URLRECIVER() {
        let rule = 'https://jsonplaceholder.typicode.com/posts/100';
        fetch(rule, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        return rule;
    }
    // 4
    async objReceiver(URL) {
        let data = this.dummyData();
        let vdata = this.processVdata(URL);
        let obj = {
            data: data,
            vdata: vdata
        }
        const obII = await fetch(`${URL}`, {
            method: 'GET',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return obII || obj || null;
    }

    // 1
    async objOverseer(ball) {
        // check to see if the object is availiable
        let obj = await this.objReceiver(ball);
        if (obj == null || obj == undefined) {
            // if not, create it
            obj = await this.objReceiver(ball);
            /// and store it
        }
        else {
            // if so, return it
            return obj;
        }
    }

}

class ProtectionProxy {
    permission = false;
    constructor() {
        console.log("ProtectionProxy created");
    }
    request() {
        console.log("ProtectionProxy request");
    }
    shouldLookUp(stihng) {
        console.log("ProtectionProxy lookUp");
        if (stihng == null || stihng == undefined) {
            return true;
        }
        else {
            return false;
        }
    }
    lookUp(stihng) {
        const l = fetch(`https://jsonplaceholder.typicode.com/posts/${stihng}`);
        const responce = l
        let neverMind = responce;
        return neverMind;
    }

    async processPdata(req) {
        const l = await fetch('https://jsonplaceholder.typicode.com/posts/req', { method: 'POST',
            body: JSON.stringify(req),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
                });
        const responce = await l.json();
        let neverMind = responce.body;
        return neverMind;
    }

    changePermissions(whetherAllowd = false) {
        if (whetherAllowd == true) {
            console.log("ProtectionProxy changePermissions");
            return true;
        }
        else {
            return false;
        }
    }
}

class SmartProxy {
    constructor() {
        console.log("SmartProxy created");
    }
    request() {
        console.log("SmartProxy request");
    }
    //4
    async processSdata(data) {
        const l = await fetch('https://jsonplaceholder.typicode.com/posts/req', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const responce = await l.json();
        let neverMind = responce.body;
        return neverMind;
    }

    // 3
    async validator(ruleset, data)
    {
        if (ruleset.lockchek(data) == true) {
            return false;
        }
        else {
            //this.processSdata(data);
            return true;
        }
    }
    // 2
    async getRules(req, URL) {
        const l = await fetch(`${URL}/req`, { method: 'GET',
            body: JSON.stringify(req),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
                });
        const responce = await l.json();
        let neverMind = responce.body;
        return neverMind;
    }
    // 1
    async getData(req, URL) {
        const l = fetch(`${URL}/req`, { method: 'GET',
            body: JSON.stringify(req),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
                });
        const responce = l
        let neverMind = responce;
        return neverMind;
    }
}

// client
// remote proxy *
// virtual proxy *
// protection proxy *
// smart proxy *
// server