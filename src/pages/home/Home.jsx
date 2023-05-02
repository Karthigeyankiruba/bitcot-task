import React, { useState } from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Filter from "../../components/Filter";
import Heading from "../../components/Heading";
import Search from "../../components/Search";
import Table from "../../components/Table";
import Footer from "../../components/Footer";

const Home = () => {
  const [results, setResults] = useState([]);
  return (
    <>
      <Topbar />

      <div class="page-wrapper">
        <Sidebar />
        <div class="content-area-wrapper">
          <div class="content-area-wrapper">
            <div class="content-wrapper">
              <Filter />
              <Heading />
              <div class="card products_blc">
                <div class="card-body">
                  <Search setResults={setResults} />
                  <div class="app_table table-responsive">
                    <Table results={results} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
