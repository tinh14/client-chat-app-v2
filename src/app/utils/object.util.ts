export class ObjectUtil {
    
    static clone(obj: any): any {
        return JSON.parse(JSON.stringify(obj));
    }

    static simpleClone(obj: any): any {
        const clonedObj = {};
        for (const key in obj) {
            if (typeof obj[key] !== 'object' && obj.hasOwnProperty(key)) {
                clonedObj[key] = obj[key];
            }
        }
        return clonedObj;
    }
}