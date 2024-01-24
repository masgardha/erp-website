import React from 'react';
import message from '../message.svg'

function Contact() {
  return (
    <div className='contact pt-5' id='contact-id' pt-5>
        <h1 className='text-center'>Hubungi kami</h1>
       <div className='container pt-5'>
        <div className='row justify-content-center'>
            <div className='col-md-10'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <h3 className='heading mb-4'>Let's talk about everything!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?</p>
                        <p>
                            <img  class="img-fluid img-thumbnail" src={message} />
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <form class="mb-5" method="post" id="contactForm" name="contactForm" novalidate="novalidate">
                            <div className='row'>
                                <div className='col-md-12 form-group'>
                                    <label class="form-label" for="formBasicEmail">Nama</label>
                                    <input type="text" class="form-control" name="name" id="name" placeholder="Nama" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12 form-group'>
                                    <label class="form-label" for="formBasicEmail">Email</label>
                                    <input type="text" class="form-control" name="name" id="name" placeholder="Email" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12 form-group'>
                                    <label class="form-label" for="formBasicEmail">Subjek</label>
                                    <input type="text" class="form-control" name="name" id="name" placeholder="Subjek" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12 form-group'>
                                    <label class="form-label" for="formBasicEmail">Pesan</label>
                                    <textarea type="text" class="form-control" name="name" id="name" placeholder="Pesan" />
                                </div>
                            </div>

                            <div className='row pt-3'>
                                <div className='col-md-12 form-group'>
                                    <button type="kirim" class="btn btn-primary">Kirim</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
    
  );
}

export default Contact;