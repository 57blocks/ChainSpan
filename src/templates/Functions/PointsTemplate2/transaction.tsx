function enterTransaction(formData: FormData, labels: string[]) {
    const data = labels.map(l => ({
        [l]: formData.get(l)
    }))
    console.log(data)
}
export default enterTransaction;