
export interface Iproduct{
    title:string
    id:number
    poster_path:string
    backdrop_path: string
    popularity:number
}
export interface Ibasket{
    title:string
    id:number
    poster_path:string
    backdrop_path: string
    popularity:number
    quantity: number
}
export interface IAcorbasket{
    title:string
    id:number
      el:any
    localStorage:null
    getItem:string
    overview:string
    name:string
    credit_id:string
    poster_path:string
    profile_path: string
    popularity:number
    quantity: number
}
export interface Inext{
    title:string
    id:number
    poster_path:string
    backdrop_path: string
    popularity:number
    quantity: number
}

export interface Ipopular {
    title:string
    id:number
    poster_path:string
    backdrop_path: string
    popularity:number
}
export interface Isearch {
    title:string
    id:number
    poster_path:string
    backdrop_path: string
    popularity:number
}

export interface topRatedI {
    title:string
    poster_path:string
    backdrop_path: string
    popularity:number
    "id": number
    "name": string
    tagline :string
    vote_count: number
    release_date: string
    original_title: string
    original_language: string
    homepage: string
    vote_average: number
    overview: string



}
export interface ActorI2 {
    title:string
    poster_path:string
    backdrop_path: string
    popularity:number
    "id": number
    profile_path:string
    "name": string
    tagline :string
    vote_count: number
    release_date: string
    original_title: string
    original_language: string
    homepage: string
    vote_average: number
    overview: string



}
export interface ActorI {
    title:string
    poster_path:string
    backdrop_path: string
    popularity:number
    "id": number
    profile_path:string
    "name": string
    tagline :string
    vote_count: number
    release_date: string
    original_title: string
    original_language: string
    homepage: string
    vote_average: number
    overview: string



}
export interface again {
    title:string
    paster_patch:string
    poster_path:string
    backdrop_path: string
    popularity:number
}
export interface detailI {
    id:number
     el:any
    release_date:string
    overview: string
    original_title:string
    genres:{
        [key:string]:string
    }
    vote_average:string
    title:string
    tagline:string
    imdb_id:string
    poster_path:string
    backdrop_path: string
    popularity:number
}
export interface homeI {
    id:number
     el:any
    backdrop_path:string
    release_date:string
    overview: string
    original_title:string
    genres:{
        [key:string]:string
    }
    vote_average:string
    title:string
    tagline:string
    imdb_id:string
    poster_path:string
    popularity:number



}
export interface jobI {
    name:string
    profile_path:string
    known_for_department:string
    biography:string
    birthday:string
    place_of_birth: string
    gender:string
    deathday:string
    also_known_as:[
         name:string
        ]
    id:number
    release_date:string
    overview: string
    original_title:string
    genres:{
        [key:string]:string
    }
    vote_average:string
    title:string
    tagline:string
    imdb_id:string
    poster_path:string
    backdrop_path: string
    popularity:number



}
export interface basketI {
    title:string
    id:number
    poster_path:string
    backdrop_path: string
    popularity:number

}