"use client";

const GreetingTitle = () => {
    const date = new Date();
    const hours = date.getHours();
    let text: string;

    if (hours < 12) text = "morning";
    else if (hours >= 12 && hours < 18) text = "afternoon";
    else text = "evening";

    return <h2 className="text-3xl font-bold -tracking-wider">Good {text}</h2>;
};

export default GreetingTitle;
