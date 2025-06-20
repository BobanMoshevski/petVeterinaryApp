import React from "react";
import { Navigation, useNavigation, useRouteLoaderData } from "react-router";
import LoadingSpinnerLayout from "../../components/loadingSpinnerLayout/LoadingSpinnerLayout";
import HeroSection from "../../components/homeContent/heroSection/HeroSection";
import VeterinaryDesription from "../../components/homeContent/veterinaryDescription/VeterinaryDescription";
import TotalOwnersPetsVaccines from "../../components/homeContent/totalOwnersPetsVaccines/TotalOwnersPetsVaccines";
import WorkingHours from "../../components/homeContent/workingHours/WorkingHours";
import Contact from "../../components/homeContent/contact/Contact";
import AppointmentForm from "../../components/homeContent/appointmentForm/AppointmentForm";
import { TotalOwnersPetsVaccinesType } from "../../components/homeContent/totalOwnersPetsVaccines/TotalOwnersPetsVaccinesTypes";

const HomePage: React.FC = () => {
  const totalOwnersPetsVaccines: TotalOwnersPetsVaccinesType =
    useRouteLoaderData("home") as TotalOwnersPetsVaccinesType;
  const navigation: Navigation = useNavigation();
  const isLoading: boolean = navigation.state === "loading";
  const isSubmitting: boolean = navigation.state === "submitting";

  return (
    <>
      <LoadingSpinnerLayout isLoading={isLoading} isSubmitting={isSubmitting} />
      <HeroSection />
      <div className="container">
        <VeterinaryDesription />
      </div>
      <div className="container-fluid">
        <TotalOwnersPetsVaccines
          totalOwnersPetsVaccines={totalOwnersPetsVaccines}
        />
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-md-6">
            <WorkingHours />
          </div>
          <div className="col-12 col-md-6 my-4 my-md-0">
            <Contact />
          </div>
          <div className="col-12 offset-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 mt-0 mt-md-5">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
