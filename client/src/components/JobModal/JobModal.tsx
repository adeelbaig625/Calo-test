import React from "react"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import "./JobModal.css"
import TextInput from "../../components/TextInput/TextInput"
import Button from "../Button/Button"

const schema = yup.object().shape({
  name: yup.string().required("Job name is required"),
})

type JobModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { name: string }) => void
}

const JobModal: React.FC<JobModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onFormSubmit = (data: { name: string }) => {
    onSubmit(data)
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Create Job</h2>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Enter job name"
                className="modal-input"
              />
            )}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <div className="modal-buttons">
            <Button label="Submit" type="submit" />

            <Button label="Cancel" type="button" onClick={onClose} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default JobModal
