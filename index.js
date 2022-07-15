export const local = new Proxy(
    {},
    {
        get: function (target, name, receiver) {
            if (!(name in target)) {
                try {
                    return JSON.parse(localStorage.getItem(name));
                } catch (e) {
                    console.log("error getting" + name);
                }
            }
            return Reflect.get(target, name, receiver);
        },
        set: function (target, name, value, receiver) {
            if (!(name in target)) {
                try {
                    localStorage.setItem(name, JSON.stringify(value));
                } catch (e) {
                    // console.log(e);
                    // console.log("error setting" + name);
                }
            }
            return Reflect.set(target, name, value, receiver);
        },
    }
);
