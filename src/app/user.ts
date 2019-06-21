interface GeoInfo{
    lat: String,
    lng: String
}

interface AddressInfo{
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: GeoInfo
}

interface CompanyInfo{
    name: String,
    catchPhrase: String,
    bs: String
}

interface User{
    id: Number,
    name: String,
    username: String,
    email: String,
    address: AddressInfo,
    phone: String,
    web: String,
    company: CompanyInfo
}