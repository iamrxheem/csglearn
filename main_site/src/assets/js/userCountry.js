import axios from "axios"

export function getCountryCode() {
  axios
    .get(
      "https://ipgeolocation.abstractapi.com/v1/?api_key=23fcb43b2ca44f8a8a8a92466656f934"
    )
    .then(resp => {
      return resp.data.country_code
    })
}
