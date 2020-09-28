module.exports = {
    asset(req,path)
    {
        return 'http://'+req.headers.host+'/'+path;
    }
}