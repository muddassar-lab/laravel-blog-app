import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Alert, Button } from "@material-tailwind/react";
import React, { useEffect, useLayoutEffect, useState } from "react";

function scriptAlreadyLoaded(src) {
    return document.querySelector(`script[src="${src}"]`);
}

function loadCheckoutScript(src) {
    return new Promise((resolve, reject) => {
        if (scriptAlreadyLoaded(src)) {
            resolve();
            return;
        }

        let checkoutScript = document.createElement("script");
        checkoutScript.src = src;
        checkoutScript.onload = resolve;
        checkoutScript.onerror = reject;
        document.head.appendChild(checkoutScript);
    });
}

function addWorldpayCheckoutToPage() {
    return new Promise((resolve, reject) => {
        (function () {
            window.Worldpay.checkout.init(
                {
                    id: "identity",
                    form: "#container",
                    fields: {
                        pan: {
                            selector: "#card-pan",
                        },
                        expiry: {
                            selector: "#card-expiry",
                        },
                        cvv: {
                            selector: "#card-cvv",
                        },
                    },
                    styles: {
                        "input.is-valid": {
                            color: "green",
                        },
                        "input.is-invalid": {
                            color: "red",
                        },
                        "input.is-onfocus": {
                            color: "black",
                        },
                    },
                    enablePanFormatting: true,
                },
                function (error, checkout) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(checkout);
                    }
                }
            );
        })();
    });
}

const Create = () => {
    const [checkout, setCheckout] = useState(null);
    const [error, setError] = useState(null);
    const checkoutScriptUrl =
        "https://try.access.worldpay.com/access-checkout/v1/checkout.js";

    function generateSession() {
        setError(null);
        checkout.generateSessionState(function (error, session) {
            if (error) {
                setError(error);
                console.warn(`Failed to generate session: ${error}`);
                return;
            }

            const infoDiv = document.querySelector(".info");
            infoDiv.innerHTML += `<div>Session retrieved is ${session}</div>`;
        });
    }

    function clearForm() {
        checkout.clearForm(() => {
            document.querySelector(".info").innerHTML = "";
        });
    }

    useEffect(() => {
        loadCheckoutScript(checkoutScriptUrl)
            .then(() => {
                addWorldpayCheckoutToPage()
                    .then((checkoutInstance) => {
                        console.log(checkoutInstance);
                        setCheckout(checkoutInstance);
                    })
                    .catch(console.warn);
            })
            .catch(console.warn);
    }, []);

    useLayoutEffect(() => {
        // Make sure to call the remove method (once) in order to deallocate the SDK from memory
        return () => {
            if (checkout != null) {
                checkout.remove();
            }
        };
    }, []);

    return (
        <AuthenticatedLayout>
            <div className="pt-4">
                <div className=" max-w-xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex flex-col items-start justify-start border-b border-gray-200 bg-white p-6">
                            <section className="container" id="container">
                                <section className="card flex flex-col">
                                    <section
                                        id="card-pan"
                                        className="field mx-2 my-3 h-[40px] bg-gray-200 px-2"
                                    />
                                    <section className="columns flex flex-row">
                                        <section>
                                            <section
                                                id="card-expiry"
                                                className="field mx-2 h-[40px] bg-gray-200 px-2"
                                            />
                                        </section>
                                        <section>
                                            <section
                                                id="card-cvv"
                                                className="field mx-2 h-[40px] bg-gray-200 px-2"
                                            />
                                        </section>
                                    </section>
                                    <section className="buttons mx-2 mt-5 mb-2 flex flex-row">
                                        <Button
                                            fullWidth
                                            onClick={generateSession}
                                        >
                                            Generate Session
                                        </Button>
                                        <p className="mx-2"></p>
                                        <Button
                                            color="red"
                                            fullWidth
                                            onClick={clearForm}
                                        >
                                            Clear
                                        </Button>
                                    </section>
                                    {error != null ? (
                                        <Alert color="red" id="error-payment">
                                            {error}
                                        </Alert>
                                    ) : null}
                                </section>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
