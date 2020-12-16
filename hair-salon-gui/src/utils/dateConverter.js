export default function dateConverter(data) {
    const dateArr = data.DatePicker.split("-").concat(data.Select.split(":"))
    const date = new Date(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4])
    console.log(date.toString());
    return date.toString()
}