import { useCallback } from "react";
import ContactItem from "./ContactItem";
import EmptyState from "./ui/EmptyState";
import contactsApi from "../services/contactsApi";

const ContactList = ({ contacts, setContacts }) => {
    // const handleRemove = useCallback((id) => {
    //     setContacts((prev) => prev.filter((c) => c.id !== id));
    // }, [ ])
    const handleRemove = useCallback(async(id) => {
       try {
           const response = await contactsApi.delete(`/contatos/${id}`)
           setContacts((prev) => prev.filter((c) => c.id !== id));
       } catch (error) {
            console.log(error)
       }
    },[])

    return (<section className="bg-white shadow rounded">
        <div className="px-4 py-3 border-b">
            <h2 className="font-medium text-gray-900">
                Contatos ({contacts.length})
            </h2>
        </div>
        <ul className="divide-y">
            {contacts.length === 0 ? (
                <EmptyState icon="📭" message="Nenhum contato cadastrado ainda." />
            ) : (
                contacts.map((c) => (
                    <ContactItem key={c.id} contact={c} handleRemove={handleRemove} />
                ))
            )}
        </ul>
    </section>
    )
}

export default ContactList