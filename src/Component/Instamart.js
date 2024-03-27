import React from 'react'
const Section = ({ title }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <><h1> {title}</h1>;
      {isOpen && <p>Thank you for your kind words! It was an absolute pleasure to meet the Eonyx team and get started on our training sessions with you all. We appreciate your attention and enthusiasm as we covered the Queries module today. As noted in our session, we have created a Google Drive folder comprised of session recordings and documentation to assist in your growth of Slate knowledge. Please feel free to share the link amongst your team. We will continue to add to this folder after each training session.
        I will touch base later this week to add a few more sessions to the calendar before April 15. In the meantime, please reach out with any questions. We look forward to connecting with you all later this week and meeting again next week!</p>
      }
      <button onClick={() => setIsOpen(true)}>Show</button>
      <button onClick={() => setIsOpen(false)}>Hide</button>
    </>)
}
const Instamart = () => {
  return (
    <><Section title={'Accordion1'} />
      <Section title={'Accordion2'} />
      <Section title={'Accordion3'} />
    </>
  )
}

export default Instamart
