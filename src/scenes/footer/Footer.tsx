import Logo from "@/assets/Logo.png"

const Footer = () =>
    <footer className="bg-primary-100 py-16">
        <div className="mx-auto w-5/6 gap-16 md:flex">
            <CopyRight />
            <Links />
            <ContactUs />
        </div>
    </footer>

const CopyRight = () =>
    <div className="mt-16 basis-1/2 md:mt-0">
        <img src={Logo} alt="logo" />
        <p className="my-5">
            Consequat labore velit anim enim mollit consequat eiusmod incididunt aliqua deserunt consectetur non pariatur enim. Voluptate reprehenderit do fugiat minim magna pariatur do consectetur irure amet. Non amet qui exercitation nostrud velit occaecat cillum cupidatat non ex. Amet pariatur esse cupidatat laboris qui Lorem ad fugiat Lorem consequat Lorem do velit sunt.
        </p>
        <p>© Evogym All Rights Reserved.</p>
    </div>

const Links = () =>
    <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Links</h4>
        <p className="my-5">Cupidatat pariatur incididunt eu ullamco esse adipisicing irure do voluptate esse dolor aute.</p>
        <p className="my-5">Lorem laborum officia incididunt aliquip proident.</p>
        <p>Culpa aute esse sit voluptate minim tempor non elit aliquip.</p>
    </div>

const ContactUs = () =>
    <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Contact Us</h4>
        <p className="my-5">Dolor occaecat qui velit elit enim dolor mollit id laboris fugiat tempor occaecat.</p>
        <p>(333)425-6825</p>
    </div>

export default Footer