function(properties, context) {

    let url = ""; // 초기 URL 값
    if (properties.isUseChoice) {
	    const courierName = properties.courierNameChoice; // 택배사 이름 가져오기
    } else {
        const courierName = properties.courierNameText;
    }
    
    
    if (courierName === "CJ대한통운" || courierName === "CJ로지스틱스") {
        url = `https://trace.cjlogistics.com/next/tracking.html?wblNo=${properties.trackingNumber}`;
    } else if (courierName === "우체국 택배") {
        url = `https://service.epost.go.kr/trace.RetrieveDomRigiTraceList.comm?displayHeader=N&sid1=${properties.trackingNumber}`;
    } else if (courierName === "한진 택배") {
        url = `https://www.hanjin.com/kor/CMS/DeliveryMgr/WaybillResult.do?mCode=MN038&schLang=KR&wblnumText2=${properties.trackingNumber}`;
    } else if (courierName === "롯데 택배") {
        url = `https://www.lotteglogis.com/home/reservation/tracking/linkView?InvNo=${properties.trackingNumber}`;
    } else if (courierName === "로젠 택배") {
        url = `https://www.ilogen.com/m/personal/trace.pop/${properties.trackingNumber}`;
    } else if (courierName === "GS편의점 택배") {
        url = `https://www.cvsnet.co.kr/invoice/tracking.do?invoice_no=${properties.trackingNumber}`;
    } else if (courierName === "CU편의점 택배") {
        url = `https://www.cupost.co.kr/postbox/delivery/localResult.cupost?invoice_no=${properties.trackingNumber}`;
    } else if (courierName === "경동 택배") {
        url = `https://kdexp.com/service/delivery/etc/delivery.do?barcode=${properties.trackingNumber}`;
    } else if (courierName === "대신 택배") {
        url = `https://www.ds3211.co.kr/freight/internalFreightSearch.ht?billno=${properties.trackingNumber}`;
    } else if (courierName === "합동 택배") {
        url = `https://hdexp.co.kr/basic_delivery.hd?barcode=${properties.trackingNumber}`;
    } else if (courierName === "건영 택배") {
        url = `https://www.kunyoung.com/goods/goods_01.php?mulno=${properties.trackingNumber}`;
    } else if (courierName === "천일 택배") {
        url = `http://www.chunil.co.kr/HTrace/HTrace.jsp?transNo=${properties.trackingNumber}`;
    } else if (courierName === "한의사랑 택배") {
        url = `http://www.hanips.com/html/sub03_03_1.html?logicnum=${properties.trackingNumber}`;
    } else if (courierName === "홈픽") {
        url = `https://www.homepick.com/tracking/${properties.trackingNumber}`;
    } else if (courierName === "우리택배(케이호남)") {
        url = `http://honamlogis.co.kr/page/?pid=tracking_number&SLIP_BARCD=${properties.trackingNumber}`;
    } else if (courierName === "대한항공") {
        url = `https://cargo.koreanair.com/ko/tracking?awbNO=${properties.trackingNumber}`;
    } else if (courierName === "일양로지스") {
        url = `http://www.ilyanglogis.com/functionality/tracking_result.asp?hawb_no=${properties.trackingNumber}`;
    } else {
        alert("해당 택배사는 지원하지 않습니다."); // 지원하지 않는 택배사
    }

    if (url) {
        window.open(url, "_blank"); // 새 탭에서 URL 열기
    }

}