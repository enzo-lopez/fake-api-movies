const z = require('zod')

const movieSchema = z.object({
    title: z.string({
        invalid_type_error: 'Movie title must be a string',
        required_error: 'Movie title is required'
    }),
    year: z.number().int().min(1950).max(2024),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().min(1).max(10),
    poster: z.string().url({
        required_error: 'Poster must be a valid URL'
    }),
    genre: z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi'],
    {invalid_type_error: 'Genre must be a valid array of enum Genre', required_error: 'Genre is required'}
    ).array(), 
})

function validateMovie(object){
    return movieSchema.safeParse(object)
}

module.exports = {validateMovie}