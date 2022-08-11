import requset from '../utils/request'

export const getUserList = () => {
    return requset('/user')
}