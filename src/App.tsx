import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WooginMain from './introduceMain/wooginMain';
import SeungheeMain from './introduceMain/seungheeMain';
import HonyungMain from './introduceMain/honyungMain';
import SosaMain from './introduceMain/sosaMain';
import YoungjunMain from './introduceMain/youngjunMain';
import DonghyeonMain from './introduceMain/donghyeonMain';
import OhseungminMain from './introduceMain/ohseungminMain';
import YuseungminMain from './introduceMain/yuseungminMain';
import JunhyeonMain from './introduceMain/junhyeonMain';
import MinguMain from './introduceMain/minguMain';
import YueanMain from './introduceMain/yueanMain';
import ChaeyiMain from './introduceMain/chaeyiMain';
import YoungsikMain from './introduceMain/youngsikMain';
import SungminMain from './introduceMain/sungminMain';
import EuncheolMain from './introduceMain/euncheolMain';
import MoongiMain from './introduceMain/moongiMain';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/김우진" element={<WooginMain />} />
        <Route path="/방승희" element={<SeungheeMain />} />
        <Route path="/변호녕" element={<HonyungMain />} />
        <Route path="/소사무엘" element={<SosaMain />} />
        <Route path="/송영준" element={<YoungjunMain />} />
        <Route path="/신동현" element={<DonghyeonMain />} />
        <Route path="/오승민" element={<OhseungminMain />} />
        <Route path="/유승민" element={<YuseungminMain />} />
        <Route path="/윤준현" element={<JunhyeonMain />} />
        <Route path="/이민구" element={<MinguMain />} />
        <Route path="/이유안" element={<YueanMain />} />
        <Route path="/이채이" element={<ChaeyiMain />} />
        <Route path="/정영식" element={<YoungsikMain />} />
        <Route path="/최성민" element={<SungminMain />} />
        <Route path="/최은철" element={<EuncheolMain />} />
        <Route path="/홍문기" element={<MoongiMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
