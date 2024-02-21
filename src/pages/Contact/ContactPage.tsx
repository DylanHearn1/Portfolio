interface ContactProps {
  isOpen: boolean;
  onclick: () => void;
}

const ContactPage = ({ isOpen, onclick }: ContactProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed w-screen h-screen backdrop-blur-md z-10 bg-white/75 dark:bg-dark-75 left-0 dark:shadow-gray-700 dark:text-white flex">
          <dialog open className="w-1/2">
            <div className="flex justify-center">
              <p>sd</p>
              <button onClick={onclick}>close</button>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
};

export default ContactPage;
