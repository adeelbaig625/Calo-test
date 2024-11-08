import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './JobModal.css'
import TextInput from '../../components/TextInput/TextInput'; // Import TextInput

// Validation schema with yup
const schema = yup.object().shape({
    name: yup.string().required('Job name is required'),
});

type JobModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { name: string }) => void;
};

const JobModal: React.FC<JobModalProps> = ({ isOpen, onClose, onSubmit }) => {
    // Use react-hook-form with validation schema
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onFormSubmit = (data: { name: string }) => {
        onSubmit(data); // Pass the data to the parent component
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Create Job</h2>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <label>Job Name:</label>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <TextInput
                                {...field} // pass all necessary props to TextInput
                                placeholder="Enter job name"
                                className="modal-input"
                            />
                        )}
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}

                    <div className="modal-buttons">
                        <button type="submit">Create</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobModal;
