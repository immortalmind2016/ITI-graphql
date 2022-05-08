//Layer with data (database/out system)

const {RESTDataSource}=require("apollo-datasource-rest")


class MoviesDataSource extends RESTDataSource{
    constructor(){
        super()

        //Database URL
        this.baseURL="https://swapi.dev/api/"
    }

    async getMovies(){
        //Database 
        const response= await this.get("films")
        return response.results

    }
    async getPostById(id){
      
        return db.findOne({id:id})
    }
}

module.exports.MoviesDataSource=MoviesDataSource