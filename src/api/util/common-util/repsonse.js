const successResponse = (res, statusCode, message, data, token) => {
    const modifiedData = {
        statusCode: statusCode || 200,
        statusMessage: message || "success",
        data: data || {},
        token: token
    }
    res.send(modifiedData);
    res.end()
};
const errorsResponse = (res, statusCode, message, data) => {
    const modifiedData = {
        statusCode: statusCode || 200,
        statusMessage: message || "error",
        data: data || {}
    }
    res.send(modifiedData);
    res.end()
};


module.exports = [successResponse, errorsResponse];