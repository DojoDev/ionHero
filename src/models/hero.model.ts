export class Hero {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public thumbnail?: string,
        public path?:string,
        public modified?: Date)
        { }
}