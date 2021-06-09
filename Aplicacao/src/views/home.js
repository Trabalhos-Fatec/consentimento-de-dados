import React from "react";
import "./css/home.css";
import { useHistory } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import MovieIcon from "@material-ui/icons/Movie";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles((theme) => ({
  body:{
    backgroundColor: '#FFFFFF',
  },
  root: {
    minWidth: 2330,
    maxHeight: 1260,
  },
  grow: {
    flexGrow: 1,
  },
  video: {
    minWidth: 800,
  },
  comment: {
    minWidth: 800,
  },
  miniVideo: {
    minWidth: 400,
    minHeight: 100,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  media2: {
    height: 0,
    width: 400,
    paddingTop: "56.25%", // 16:9
  },
  large: {
    width: 400,
    height: 250,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = null;

  const renderMobileMenu = null;

  const history = useHistory();
  const goPerfil = () => history.push("/Perfil");

  return (
    <>
      {/* App Bar */}
      <div className={classes.grow}>
        <AppBar style={{ backgroundColor: "#111724" }} position="static">
          <Toolbar>
            <MovieIcon style={{ marginRight: "10px" }} />

            <Typography className={classes.title} variant="h6" noWrap>
              TUTUBE
            </Typography>
            {/* Barra de Pesquisa */}
            <div style={{ alignItems: "center" }} className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            {/* Ícones do canto direito */}
            <div className={classes.sectionDesktop}>
              <IconButton
              aria-describedby={id}
                color="inherit"
                onClick={handleClick}
              >
                <Badge color="secondary" badgeContent="1">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={goPerfil}
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
{/* Popover Notificações */}
<Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>Clique para assistir um vídeo top!!!</Typography>
      </Popover>

      {/* Conteúdo da Página */}

      <Grid
        container
        direction="row"
        justify="left"
        alignItems="flex-start"
        spacing={0}
        style={{ minHeight: "200vh" }}
      >
        {/*Card de fundo da página */}
        <Card style={{ backgroundColor: "#263E52" }} className={classes.root}>
          <CardContent>
            <Grid style={{ marginLeft: "30vh" }} item xs>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                spacing={0}
                style={{ minHeight: "90vh" }}
              >
                <Grid item xs>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="flex-start"
                    spacing={0}
                    style={{ minHeight: "90vh" }}
                  >
                    {/* Vídeo */}
                    <Grid style={{ marginTop: "50px" }} item xs>
                      <Card
                        style={{ marginLeft: "50px", marginBottom: "10px" }}
                        className={classes.video}
                      >
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image="https://raw.githubusercontent.com/Trabalhos-Fatec/consentimento-de-dados/main/Documentação%20Aplicação/Imagens/capa-mandalorian.png"
                            title="Orgulho e Preconceito"
                          />
                          <CardContent>
                            <Typography
                              id="fonte"
                              gutterBottom
                              variant="h4"
                              component="h2"
                            >
                              THE MANDALORIAN - Ep.16 
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>

                    {/* Comentários */}
                    <Grid style={{ marginTop: "30px" }} item xs>
                      <Typography
                        style={{ marginLeft: "20px" }}
                        variant="h5"
                        id="white"
                        color="textSecondary"
                        gutterBottom
                      >
                        COMENTÁRIOS
                      </Typography>
                      <Card
                        style={{
                          backgroundColor: "#263E52",
                          marginLeft: "20px",
                        }}
                        className={classes.comment}
                        variant="outlined"
                      >
                        <CardContent>
                          <Grid
                            container
                            direction="row"
                            justify="left"
                            alignItems="center"
                            spacing={0}
                          >
                            <AccountCircle style={{ fontSize: "50px" }} />

                            <Typography id="white" variant="h5" component="h2">
                              Mariana Araujo
                            </Typography>
                          </Grid>
                          <Typography
                            style={{ marginLeft: "20vh", marginTop: "2vh" }}
                            id="white"
                            variant="h5"
                            component="p"
                          >
                            GEENTEEE, terminei o episódio assim 😨. O que será que vai acontecer no próximo???
                          </Typography>
                        </CardContent>
                        <CardContent>
                          <Grid
                            container
                            direction="row"
                            justify="left"
                            alignItems="center"
                            spacing={0}
                          >
                            <AccountCircle style={{ fontSize: "50px" }} />

                            <Typography id="white" variant="h5" component="h2">
                              Jennifer Dominique
                            </Typography>
                          </Grid>
                          <Typography
                            style={{ marginLeft: "20vh", marginTop: "2vh" }}
                            id="white"
                            variant="h5"
                            component="p"
                          >
                            Ansiosa pra ver o próximo episodio!!!
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                {/* Recomendações */}
                <Grid item xs>
                  <Grid
                    container
                    direction="column"
                    justify="right"
                    alignItems="flex-end"
                    spacing={0}
                    style={{ minHeight: "90vh" }}
                  >
                    <Grid
                      style={{ marginTop: "30px", marginRight: "20px" }}
                      item
                      xs
                    >
                      <Typography
                        style={{ marginLeft: "20px" }}
                        variant="h5"
                        id="white"
                        color="textSecondary"
                        gutterBottom
                      >
                        RECOMENDAÇÕES
                      </Typography>
                      <Card
                        style={{
                          backgroundColor: "#172733",
                          marginLeft: "20px",
                        }}
                        className={classes.miniVideo}
                        variant="outlined"
                      >
                        <CardContent>
                          <CardActionArea>
                            <CardMedia
                              className={classes.media2}
                              image="https://i.ytimg.com/vi/sj9J2ecsSpo/maxresdefault.jpg"
                              title="Orgulho e Preconceito"
                            />
                            <CardContent>
                              <Typography
                                id="white"
                                gutterBottom
                                style={{ fontSize: "20px" }}
                              >
                                WANDAVISION - Official Trailer 0.3
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </CardContent>
                      </Card>
                      <Card
                        style={{
                          backgroundColor: "#172733",
                          marginLeft: "20px",
                        }}
                        className={classes.miniVideo}
                        variant="outlined"
                      >
                        <CardContent>
                          <CardActionArea>
                            <CardMedia
                              className={classes.media2}
                              image="https://image.freepik.com/vetores-gratis/modelo-de-capa-do-youtube-do-esporte_23-2148599060.jpg"
                              title="Orgulho e Preconceito"
                            />
                            <CardContent>
                              <Typography
                                id="white"
                                gutterBottom
                                style={{ fontSize: "20px" }}
                              >
                                SPORT FOR BEGINNER
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </CardContent>
                      </Card>
                      <Card
                        style={{
                          backgroundColor: "#172733",
                          marginLeft: "20px",
                        }}
                        className={classes.miniVideo}
                        variant="outlined"
                      >
                        <CardContent>
                          <CardActionArea>
                            <CardMedia
                              className={classes.media2}
                              image="https://image.freepik.com/vetores-gratis/miniatura-do-youtube-de-musica-geometrica-de-design-plano-com-diferentes-formas_23-2148926123.jpg"
                              title="Orgulho e Preconceito"
                            />
                            <CardContent>
                              <Typography
                                id="white"
                                gutterBottom
                                style={{ fontSize: "20px" }}
                              >
                               THE SOUND OF A NEW GENERATION
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
