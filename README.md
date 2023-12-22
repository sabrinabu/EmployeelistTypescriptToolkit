# EmployeelistTypescriptToolkit

## here I used Employee type to send data toolkit and similarly I added same type toolkit too.


### const handleAddFormSubmit = (event) => {
    event.preventDefault();

    let newContact: Employee = {
      id: addFormData.id,
      imageUrl: addFormData.imageUrl,
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      email: addFormData.email,
      contactNumber: addFormData.contactNumber,
      age: addFormData.age,
      dob: addFormData.dob,
      salary: addFormData.salary,
      address: addFormData.address,
    };

    dispatch(addNewEmployee(newContact));
  };
#### Toolkit code addNewEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees = [
        ...state.employees,
        {
          id: action.payload.id,
          imageUrl: action.payload.imageUrl,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          contactNumber: action.payload.contactNumber,
          dob: action.payload.dob,
          age: action.payload.age,
          salary: action.payload.salary,
          address: action.payload.address,
        },
      ];
      console.log(state.employees);
    },
