
exports.departmentGetConteroller = async (req, res, next) => {
    try {
        const departments = await Department.find()
        res.json({ data: departments })

    } catch (error) {
        next(error)
    }
}
exports.departmentPostController = async (req, res, next) => {
    try {
        const newDepartment = new Department(req.body)
        const res = await newDepartment.save()
        console.log({ res })
        res.json({
            message: 'Department created successfully',
            error: false,
            data: res
        })
    } catch (error) {
        next(error)
    }
}
exports.departmentPatchController = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}
exports.departmentDeleteController = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}