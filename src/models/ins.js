/* eslint-disable class-methods-use-this */
import {
    post
} from '../utils/http'

class Ins {

    async getUrls(info) {
        const res = await post('ins', info)
        return res
    }
}

export default new Ins()