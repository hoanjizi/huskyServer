class ViewModelHusky {
    static ListHusky(huskys) {
        let arrayHusky = []
        huskys.forEach(e => {
            arrayHusky.push({ id: e._id, idImg: e.idImg, name: e.name, like: e.like})
        });
        return arrayHusky
    }
}
module.exports = {
    ViewModelHusky
}