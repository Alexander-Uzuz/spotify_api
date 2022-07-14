export interface IGetRecomendation{
    "tracks" : any,
    "seeds" : ISeed[]
  }

export interface ISeed{
    "initialPoolSize" : number,
    "afterFilteringSize" : number,
    "afterRelinkingSize" : number,
    "id" : string,
    "type" : string,
    "href" : null | string   
}