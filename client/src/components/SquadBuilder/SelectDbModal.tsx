import React from 'react';

interface SelectDBProps {
  dbType: string | null;
  setDbType: Function;
}

export default function SelectDbModal(props: SelectDBProps) {
  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = () => {
    setShowModal(false);
  };

  const setDB = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    console.log(target.value);
    props.setDbType(target.value);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="modal inset-0">
            <div className="contentParent">
              <div className="contentChild">
                {/*content div*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed text-center">
                    Select which database to use for your squad.
                  </p>
                </div>
                {/* db buttons */}
                <div className="space-x-10">
                  <button
                    onClick={(e) => setDB(e)}
                    className="btn-select-db "
                    value="FIFA 23"
                  >
                    FIFA 23
                  </button>
                  <button
                    onClick={(e) => setDB(e)}
                    className="btn-select-db "
                    value="Football Manager 22"
                  >
                    Football Manager 22
                  </button>
                  <button
                    onClick={(e) => setDB(e)}
                    className="btn-select-db"
                    value="Real Life"
                  >
                    Real Life
                  </button>
                </div>
                {/* Continue Button */}
                <div className="text-center mt-10 flex justify-center">
                  <button
                    onClick={toggleModal}
                    className="flex focus:outline-none text-white bg-green-600 hover:bg-green-800 font-medium 
                  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                  >
                    Continue
                    <svg
                      aria-hidden="true"
                      className="w-5 h-6 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modalBackground"></div>
        </>
      ) : null}
    </>
  );
}
