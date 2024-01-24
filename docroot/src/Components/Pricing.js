import React from "react";

function Pricing() {
   
    return (
        <div className="pricing pt-5" id='pricing-id'>
            <h2 className="text-center">Paket Berlangganan</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 pt-5">
            <div class="col">
                <div className="card">
                    <div class="card-header fw-bold text-center fs-5">
                        Basic
                    </div>
                    <div className="card-body">
                    <p className="card-text fs-4"><strong>Rp.100.000</strong> / bulan</p>
                    <p className="card-text">- Mencatat barang masuk</p>
                    <p className="card-text">- Mencatat barang keluar</p>
                    <p className="card-text">- Mencatat hasil keuntungan</p>
                    <a class="btn btn-primary">Pilih paket</a>

                </div>
                </div>
            </div>
            <div className="col">
                    <div className="card">
                        <div class="card-header bg-primary fw-bold text-light text-center fs-3">
                            Business
                        </div>
                        <div className="card-body">
                        <p className="card-text fs-4"><strong>Rp.100.000</strong> / bulan</p>
                        <p className="card-text">- Mencatat barang masuk</p>
                        <p className="card-text">- Mencatat barang keluar</p>
                        <p className="card-text">- Mencatat hasil keuntungan</p>
                        <a class="btn btn-primary">Pilih paket</a>
                    </div>

                </div>
            </div>
            <div className="col">
                    <div className="card">
                        <div class="card-header fw-bold text-light bg-dark text-center fs-5">
                            Entrepreneur
                        </div>
                        <div className="card-body">
                        <p className="card-text fs-4"><strong>Rp.100.000</strong> / bulan</p>
                        <p className="card-text">- Mencatat barang masuk</p>
                        <p className="card-text">- Mencatat barang keluar</p>
                        <p className="card-text">- Mencatat hasil keuntungan</p>
                        <a class="btn btn-primary justify-content-md-end">Pilih paket</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}
export default Pricing