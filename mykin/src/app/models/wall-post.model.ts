export class WallPost {
    constructor(
        public title: string,
        public description: string,
        public createdDate: Date,
        public likes: number,
        public imageUrl: string,
        public location?: string ) {

        }
}