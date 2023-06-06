import React from 'react';

const BuyModal = ({ buy, setBuy }) => {


    return (
        <div>

            <dialog id="my-modal" class="modal modal-bottom sm:modal-middle">
                <form method="dialog" class="modal-box">
                    <button for="my-modal" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                    <h3 class="font-bold text-lg">Hello!</h3>
                    <p class="py-4">Press ESC key or click the button below to close</p>
                    <div class="modal-action">

                        <button class="btn">Close</button>
                    </div>
                </form>
            </dialog></div>

    );
};

export default BuyModal;