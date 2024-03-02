import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useReducer } from 'react';
import BasicTable from './Tabels';
import { Radio ,RadioGroup} from '@mui/material';
import * as React from 'react';


function createData(name,tbien, bien, satisfaisant, suffisant, insuffisant) {
    return { name,tbien, bien, satisfaisant, suffisant, insuffisant};
  }
const TableForm = ({langues,skills,officeit,dispatch}) => {


    const handleChangeskills = (e) => {
       
        dispatch({type:'setskills',skill:{name:e.target.name,deg:e.target.value}})
      };
      const rows = [
        createData('Intelligence émotionnelle', <Radio
        checked={skills.ie === 'TBien'}
        onChange={handleChangeskills}
        value="TBien"
        name="IE"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={skills.ie  === 'Bien'}
        onChange={handleChangeskills}
        value="Bien"
        name="IE"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={skills.ie  === 'satisfaisant'}
        onChange={handleChangeskills}
        value="satisfaisant"
        name="IE"
        inputProps={{ 'aria-label': 'satisfaisant' }}
        />,
        <Radio
        checked={skills.ie  === 'suffisant'}
        onChange={handleChangeskills}
        value="suffisant"
        name="IE"
        inputProps={{ 'aria-label': 'suffisant' }}
        />,
        <Radio
        checked={skills.ie  === 'insuffisant'}
        onChange={handleChangeskills}
        value="insuffisant"
        name="IE"
        inputProps={{ 'aria-label': 'insuffisant' }}
        />
        ),
        createData('Compétence interculturelle', <Radio
        checked={skills.ci  === 'TBien'}
        onChange={handleChangeskills}
        value="TBien"
        name="CI"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={skills.ci  === 'Bien'}
        onChange={handleChangeskills}
        value="Bien"
        name="CI"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={skills.ci  === 'satisfaisant'}
        onChange={handleChangeskills}
        value="satisfaisant"
        name="CI"
        inputProps={{ 'aria-label': 'satisfaisant' }}
        />,
        <Radio
        checked={skills.ci  === 'suffisant'}
        onChange={handleChangeskills}
        value="suffisant"
        name="CI"
        inputProps={{ 'aria-label': 'suffisant' }}
        />,
        <Radio
        checked={skills.ci  === 'insuffisant'}
        onChange={handleChangeskills}
        value="insuffisant"
        name="CI"
        inputProps={{ 'aria-label': 'insuffisant' }}
        />
        ),
        createData('Skills pour résplution des problémes', <Radio
        checked={skills.srp  === 'TBien'}
        onChange={handleChangeskills}
        value="TBien"
        name="SRP"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={skills.srp  === 'Bien'}
        onChange={handleChangeskills}
        value="Bien"
        name="SRP"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={skills.srp  === 'satisfaisant'}
        onChange={handleChangeskills}
        value="satisfaisant"
        name="SRP"
        inputProps={{ 'aria-label': 'satisfaisant' }}
        />,
        <Radio
        checked={skills.srp  === 'suffisant'}
        onChange={handleChangeskills}
        value="suffisant"
        name="SRP"
        inputProps={{ 'aria-label': 'suffisant' }}
        />,
        <Radio
        checked={skills.srp  === 'insuffisant'}
        onChange={handleChangeskills}
        value="insuffisant"
        name="SRP"
        inputProps={{ 'aria-label': 'insuffisant' }}
        />
        ),
        createData('Volonté de développer', <Radio
        checked={skills.vd  === 'TBien'}
        onChange={handleChangeskills}
        value="TBien"
        name="VD"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={skills.vd  === 'Bien'}
        onChange={handleChangeskills}
        value="Bien"
        name="VD"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={skills.vd  === 'satisfaisant'}
        onChange={handleChangeskills}
        value="satisfaisant"
        name="VD"
        inputProps={{ 'aria-label': 'satisfaisant' }}
        />,
        <Radio
        checked={skills.vd  === 'suffisant'}
        onChange={handleChangeskills}
        value="suffisant"
        name="VD"
        inputProps={{ 'aria-label': 'suffisant' }}
        />,
        <Radio
        checked={skills.vd  === 'insuffisant'}
        onChange={handleChangeskills}
        value="insuffisant"
        name="VD"
        inputProps={{ 'aria-label': 'insuffisant' }}
        />
        ),
        createData('Auto-organisation', <Radio
        checked={skills.ao  === 'TBien'}
        onChange={handleChangeskills}
        value="TBien"
        name="AO"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={skills.ao  === 'Bien'}
        onChange={handleChangeskills}
        value="Bien"
        name="AO"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={skills.ao  === 'satisfaisant'}
        onChange={handleChangeskills}
        value="satisfaisant"
        name="AO"
        inputProps={{ 'aria-label': 'satisfaisant' }}
        />,
        <Radio
        checked={skills.ao  === 'suffisant'}
        onChange={handleChangeskills}
        value="suffisant"
        name="AO"
        inputProps={{ 'aria-label': 'suffisant' }}
        />,
        <Radio
        checked={skills.ao  === 'insuffisant'}
        onChange={handleChangeskills}
        value="insuffisant"
        name="AO"
        inputProps={{ 'aria-label': 'insuffisant' }}
        />
        ),
        createData('Communication digitale', <Radio
        checked={skills.cd  === 'TBien'}
        onChange={handleChangeskills}
        value="TBien"
        name="CD"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={skills.cd  === 'Bien'}
        onChange={handleChangeskills}
        value="Bien"
        name="CD"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={skills.cd  === 'satisfaisant'}
        onChange={handleChangeskills}
        value="satisfaisant"
        name="CD"
        inputProps={{ 'aria-label': 'satisfaisant' }}
        />,
        <Radio
        checked={skills.cd  === 'suffisant'}
        onChange={handleChangeskills}
        value="suffisant"
        name="CD"
        inputProps={{ 'aria-label': 'suffisant' }}
        />,
        <Radio
        checked={skills.cd  === 'insuffisant'}
        onChange={handleChangeskills}
        value="insuffisant"
        name="CD"
        inputProps={{ 'aria-label': 'insuffisant' }}
        />
        ),
      ];
  
      const handleChangeslangues = (e) => {
        dispatch({type:'setlangs',lang:{name:e.target.name,deg:e.target.value}})
      };
  
     
      const languesarr = [
        createData('Arabic', <Radio
        checked={langues.ar === 'TBien'}
        onChange={handleChangeslangues}
        value="TBien"
        name="AR"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={langues.ar  === 'Bien'}
        onChange={handleChangeslangues}
        value="Bien"
        name="AR"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={langues.ar  === 'Moyen'}
        onChange={handleChangeslangues}
        value="Moyen"
        name="AR"
        inputProps={{ 'aria-label': 'Basique' }}
        />,
        <Radio
        checked={langues.ar  === 'Basique'}
        onChange={handleChangeslangues}
        value="Basique"
        name="AR"
        inputProps={{ 'aria-label': 'Basique' }}
        />),
        createData('Chinois', <Radio
        checked={langues.chinois  === 'TBien'}
        onChange={handleChangeslangues}
        value="TBien"
        name="chinois"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={langues.chinois  === 'Bien'}
        onChange={handleChangeslangues}
        value="Bien"
        name="chinois"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={langues.chinois  === 'Moyen'}
        onChange={handleChangeslangues}
        value="Moyen"
        name="chinois"
        inputProps={{ 'aria-label': 'Moyen' }}
        />,
        <Radio
        checked={langues.chinois  === 'Basique'}
        onChange={handleChangeslangues}
        value="Basique"
        name="chinois"
        inputProps={{ 'aria-label': 'Basique' }}
        />),
        createData('Allemand', <Radio
        checked={langues.allemand  === 'TBien'}
        onChange={handleChangeslangues}
        value="TBien"
        name="allemand"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={langues.allemand  === 'Bien'}
        onChange={handleChangeslangues}
        value="Bien"
        name="allemand"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={langues.allemand  === 'Moyen'}
        onChange={handleChangeslangues}
        value="Moyen"
        name="allemand"
        inputProps={{ 'aria-label': 'Moyen' }}
        />,
        <Radio
        checked={langues.allemand  === 'Basique'}
        onChange={handleChangeslangues}
        value="Basique"
        name="allemand"
        inputProps={{ 'aria-label': 'Basique' }}
        />),
        createData('Englais', <Radio
        checked={langues.en  === 'TBien'}
        onChange={handleChangeslangues}
        value="TBien"
        name="en"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={langues.en  === 'Bien'}
        onChange={handleChangeslangues}
        value="Bien"
        name="en"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={langues.en  === 'Moyen'}
        onChange={handleChangeslangues}
        value="Moyen"
        name="en"
        inputProps={{ 'aria-label': 'Moyen' }}
        />,
        <Radio
        checked={langues.en  === 'Basique'}
        onChange={handleChangeslangues}
        value="Basique"
        name="en"
        inputProps={{ 'aria-label': 'Basique' }}
        />
        ),
        createData('Francais', <Radio
        checked={langues.fr  === 'TBien'}
        onChange={handleChangeslangues}
        value="TBien"
        name="fr"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={langues.fr  === 'Bien'}
        onChange={handleChangeslangues}
        value="Bien"
        name="fr"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={langues.fr  === 'Moyen'}
        onChange={handleChangeslangues}
        value="Moyen"
        name="fr"
        inputProps={{ 'aria-label': 'Moyen' }}
        />,
        <Radio
        checked={langues.fr  === 'Basique'}
        onChange={handleChangeslangues}
        value="Basique"
        name="fr"
        inputProps={{ 'aria-label': 'Basique' }}
        />),
        createData('italien', <Radio
        checked={langues.italien  === 'TBien'}
        onChange={handleChangeslangues}
        value="TBien"
        name="italien"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={langues.italien  === 'Bien'}
        onChange={handleChangeslangues}
        value="Bien"
        name="italien"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={langues.italien  === 'Moyen'}
        onChange={handleChangeslangues}
        value="Moyen"
        name="italien"
        inputProps={{ 'aria-label': 'Moyen' }}
        />,
        <Radio
        checked={langues.italien  === 'Basique'}
        onChange={handleChangeslangues}
        value="Basique"
        name="italien"
        inputProps={{ 'aria-label': 'Basique' }}
        />
        ),
      ];
  
      
      const handleChangesofficeit = (e) => {
         
        dispatch({type:'setofficeit',office:{name:e.target.name,deg:e.target.value}})
      };
      const officeitarr = [
        createData('Word', <Radio
        checked={officeit.word === 'TBien'}
        onChange={handleChangesofficeit}
        value="TBien"
        name="word"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={officeit.word  === 'Bien'}
        onChange={handleChangesofficeit}
        value="Bien"
        name="word"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={officeit.word  === 'Moyen'}
        onChange={handleChangesofficeit}
        value="Moyen"
        name="word"
        inputProps={{ 'aria-label': 'Basique' }}
        />,
        <Radio
        checked={officeit.word  === 'Basique'}
        onChange={handleChangesofficeit}
        value="Basique"
        name="word"
        inputProps={{ 'aria-label': 'Basique' }}
        />),
        createData('Excel', <Radio
        checked={officeit.excel  === 'TBien'}
        onChange={handleChangesofficeit}
        value="TBien"
        name="excel"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={officeit.excel  === 'Bien'}
        onChange={handleChangesofficeit}
        value="Bien"
        name="excel"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={officeit.excel  === 'Moyen'}
        onChange={handleChangesofficeit}
        value="Moyen"
        name="excel"
        inputProps={{ 'aria-label': 'Moyen' }}
        />,
        <Radio
        checked={officeit.excel  === 'Basique'}
        onChange={handleChangesofficeit}
        value="Basique"
        name="excel"
        inputProps={{ 'aria-label': 'Basique' }}
        />),
        createData('Powerpoint', <Radio
        checked={officeit.powerpoint  === 'TBien'}
        onChange={handleChangesofficeit}
        value="TBien"
        name="powerpoint"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={officeit.powerpoint  === 'Bien'}
        onChange={handleChangesofficeit}
        value="Bien"
        name="powerpoint"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={officeit.powerpoint  === 'Moyen'}
        onChange={handleChangesofficeit}
        value="Moyen"
        name="powerpoint"
        inputProps={{ 'aria-label': 'Moyen' }}
        />,
        <Radio
        checked={officeit.powerpoint  === 'Basique'}
        onChange={handleChangesofficeit}
        value="Basique"
        name="powerpoint"
        inputProps={{ 'aria-label': 'Basique' }}
        />),
        createData('Outlook', <Radio
        checked={officeit.outlook  === 'TBien'}
        onChange={handleChangesofficeit}
        value="TBien"
        name="outlook"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={officeit.outlook  === 'Bien'}
        onChange={handleChangesofficeit}
        value="Bien"
        name="outlook"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={officeit.outlook  === 'Moyen'}
        onChange={handleChangesofficeit}
        value="Moyen"
        name="outlook"
        inputProps={{ 'aria-label': 'Moyen' }}
        />,
        <Radio
        checked={officeit.outlook  === 'Basique'}
        onChange={handleChangesofficeit}
        value="Basique"
        name="outlook"
        inputProps={{ 'aria-label': 'Basique' }}
        />
        ),
        createData('access', <Radio
        checked={officeit.access  === 'TBien'}
        onChange={handleChangesofficeit}
        value="TBien"
        name="access"
        inputProps={{ 'aria-label': 'TBien' }}
        />,<Radio
        checked={officeit.access  === 'Bien'}
        onChange={handleChangesofficeit}
        value="Bien"
        name="access"
        inputProps={{ 'aria-label': 'Bien' }}
        />,
        <Radio
        checked={officeit.access  === 'Moyen'}
        onChange={handleChangesofficeit}
        value="Moyen"
        name="access"
        inputProps={{ 'aria-label': 'Moyen' }}
        />,
        <Radio
        checked={officeit.access  === 'Basique'}
        onChange={handleChangesofficeit}
        value="Basique"
        name="access"
        inputProps={{ 'aria-label': 'Basique' }}
        />),
      ];

    return (
       <>
      
      <Typography variant="h6"  gutterBottom>
        Top Skills
      </Typography>
      <Grid container spacing={3}>
         <Grid item xs={12} >
           <BasicTable title='Skills' rows={rows} titles={['Trés Bien','Bien','satisfaisant','suffisant','Insuffisant']} />
        </Grid>
        <Grid item xs={12}>
        <Typography>
           Avez-vous un certificat de compétence en langue allemande ?
        </Typography>
        <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Non"
                name="radio-buttons-group"
                onChange={(e)=>dispatch({type:'certificat',crt:e.target.value})}
              >
                <FormControlLabel value="Non" control={<Radio />} label="Non" />
                <FormControlLabel value="A1" control={<Radio />} label="A1" />
                <FormControlLabel value="A2" control={<Radio />} label="A2" />
                <FormControlLabel value="B1" control={<Radio />} label="B1" />
                <FormControlLabel value="B2" control={<Radio />} label="B2" />
              </RadioGroup>
         </FormControl>

        </Grid>
         
        <Grid item xs={12} >
        <Typography>
           Niveau de la langue
        </Typography>
           <BasicTable title='Langues' rows={languesarr} titles={['Trés Bien','Bien','Moyen','Basique']} />
        </Grid>
        
      </Grid>


      <Typography variant="h6"  gutterBottom>
        IT-Skills (Office IT)
      </Typography>
      <Grid container spacing={3}>
         <Grid item xs={12} >
           <BasicTable title='IT-Skills' rows={officeitarr} titles={['Trés Bien','Bien','Moyen','Basique']} />
        </Grid>    
      </Grid>
       </>
    );
};

export default React.memo(TableForm);


