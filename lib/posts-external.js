
//API call (fail)
export async function getExternalApi(){
    const res = await fetch('yahoo.co.jp')
    return res.json()
}