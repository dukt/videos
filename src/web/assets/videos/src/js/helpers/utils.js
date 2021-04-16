export default {
    getCollectionUniqueKey(gateway, sectionKey, collectionKey) {
        return gateway + ':' + sectionKey + ':' + collectionKey
    }
}