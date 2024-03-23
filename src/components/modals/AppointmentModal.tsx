'use client'

import useAppointmentModal from "@/hooks/useAppointmentModal";

import Modal from "./Modal";


const AppointmentModal = () => {
    const appointmentModal = useAppointmentModal();
    return (
        <Modal 
            isOpen = {appointmentModal.isOpen}
            onClose = {appointmentModal.onClose}
            onSubmit={appointmentModal.onClose}
            actionLabel="Submit"
            title = "Dentisa your Appointment"
            />

    )
}

export default AppointmentModal;