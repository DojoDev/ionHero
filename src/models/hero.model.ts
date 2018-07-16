export class Hero {
    constructor(
        public name?: string,
        public description?: string,
        public thumbnail?: string,
        public path?:string,
        public modified?: Date)
        { }
}