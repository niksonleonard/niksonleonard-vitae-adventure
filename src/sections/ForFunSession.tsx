import { Component } from "react";
import { PageSection } from "../components/PageSessionComponent";
import { forFunData } from "../data/ForFunData";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Avatar, Chip } from "@mui/material";

export class ForFunSection extends Component {
    render() {
        
        return (<PageSection title="Apenas por diversão e interesse">
            
            <div className="card">
                Algumas coisas que eu gosto de fazer nas horas vagas por estudo,
                interesse ou apenas por diversão:
            </div>

            <Grid2 container spacing={2}>
            {forFunData.map((item) => {
                return (
                    <Grid2 >
                        <Chip
                            avatar={<Avatar alt="Natacha" src={item.thumbnail}/>}
                            label={item.title} 
                            variant="outlined"
                        />
                    </Grid2>)
            })}
            </Grid2>

            </PageSection>);
    }
}
