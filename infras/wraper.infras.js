const ExpressError = require('../models/error.model')
const successCode = 200
const ErrorCode = require('../infras/error.infras.js')

const wrapper = (req, res, func) => {
    Promise.resolve()
        .then(() => {
            return Promise.resolve(func(req))
        })
        .then((responseBody) => {
            res.status(successCode).send(responseBody);
        })
        .catch((error) => {
            doCatch(error, res)
        })

}

class ExpressResponse { 
    constructor(body) {
        this.body = body
    }
}

const wrapForExpressWithMongo = (func) => {
    return (req, res) => {
        return wrapper(req, res, (req) => {
                    return func(req)
                }
            )
    }
}

const doCatch = (error, res) => {
    let errorObj = new ExpressResponse({ msg: error.message})
    if (error instanceof ExpressError.HttpFriendlyError) {
        res.status(error.code).send(errorObj)
    }
    else {
        errorObj.message += "::UnexpectedError"
        res.status(ErrorCode.Status.InternalServerError).send(errorObj)
    }
}

module.exports = wrapForExpressWithMongo