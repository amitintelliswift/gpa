import { useEffect, useState } from "react";
import LoadingImage from '../../static/images/loading.svg';

const LoadingComponent = () => {
    return (
        <div className='loadingWrap'>
            <img src={LoadingImage} alt="loading" />
        </div>
    )
}

const ProductBenefits = (props) => {
    const { selectedOption, benifits ,premium } = props;
    const [loader, setLoader] = useState(false);
    useEffect(()=> {
        setLoader(true);
        if (props.benifits!==0) {
            setLoader(false)
        }
    }, [props.benifits])
    return (
        <>
            {loader ? <LoadingComponent /> : ''}
            <table>
                <thead>
                    <tr>
                        <th>Product Features</th>
                        <th></th>
                        <th align="right">Option {selectedOption} (Sum Insured in Rs.)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        benifits && benifits?.map((option, index) => (
                            <tr key={index}>
                                <td>{option.vCovers}</td>
                                <td></td>
                                <td align="right">{option.Orders}</td>
                            </tr>
                        ))
                    }
                    <tr>
                    <td style={{color:"#101010",fontSize:16,fontWeight:"bold"}}>Sum Insured</td>
                    <td></td>
                    <td align="right" style={{color:"#101010",fontSize:16,fontWeight:"bold"}}>{premium.totalSumInsured}</td>
                    </tr>
                        <tr>
                        
                    <td style={{color:"#EE1C25",fontSize:18,fontWeight:"bold"}}>Total Premium(Excluding Taxes)</td>
                    <td></td>
                    <td  style={{color:"#EE1C25",fontSize:18,fontWeight:"bold"}} align="right">{premium.premium}</td>
                    </tr>
                
                </tbody>
            </table>


        </>
    )
}
export default ProductBenefits;