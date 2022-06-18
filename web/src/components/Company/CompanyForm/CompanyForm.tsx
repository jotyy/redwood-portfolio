import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'



const CompanyForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.company?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.company?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="role"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Role
        </Label>
        
          <TextField
            name="role"
            defaultValue={props.company?.role}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="role" className="rw-field-error" />

        <Label
          name="period"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Period
        </Label>
        
          <TextField
            name="period"
            defaultValue={props.company?.period}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="period" className="rw-field-error" />

        <Label
          name="skills"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Skills
        </Label>
        
          <TextField
            name="skills"
            defaultValue={props.company?.skills}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="skills" className="rw-field-error" />

        <Label
          name="logo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Logo
        </Label>
        
          <TextField
            name="logo"
            defaultValue={props.company?.logo}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="logo" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CompanyForm
